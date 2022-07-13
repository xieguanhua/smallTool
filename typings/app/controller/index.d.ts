// This file is created by egg-ts-helper@1.30.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportSpeech from '../../../app/controller/speech';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    speech: ExportSpeech;
  }
}
