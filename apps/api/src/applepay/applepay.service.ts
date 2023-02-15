import { Injectable } from '@nestjs/common';
import axios from 'axios';
import https from 'https';

@Injectable()
export class ApplepayService {
  public static cert: Buffer | string;
  public static key: string;

  public async sessionStart(data: ApplepaySessionRequest): Promise<never | boolean> {
    try {
      const res = await axios.post('https://apple-pay-gateway.apple.com/paymentservices/paymentSession', data.body, {
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
          keepAlive: false,
          minVersion: 'TLSv1.2',
          cert: process.env.APPLEPAY_CERT,
          key: process.env.APPLEPAY_KEY
        }),
      });
      return res.data as never;
    } catch (e) {
      console.log('sessionStart ERROR!', e);
      return false;
    }
  }
}

export interface ApplepaySessionRequest {
  validationUrl: string;
  body: unknown;
};
