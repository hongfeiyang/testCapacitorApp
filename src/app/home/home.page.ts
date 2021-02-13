import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import 'capacitor-plugin-ffmpeg';

const { FFmpeg } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public results = ""

  constructor() { }

  async exec() {
    this.results = (await FFmpeg.exec('test')).value;
  }
}
