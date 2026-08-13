const fs = require('fs');
const { pipeline } = require('stream');
const { promisify } = require('util');
const streamPipeline = promisify(pipeline);

const images = [
  ['https://picsum.photos/1600/900?seed=gpu', 'public/images/gpu.jpg'],
  ['https://picsum.photos/1600/900?seed=cpu', 'public/images/cpu.jpg'],
  ['https://picsum.photos/1600/900?seed=monitor27', 'public/images/monitor-27.jpg'],
  ['https://picsum.photos/1600/900?seed=ssd', 'public/images/ssd.jpg'],
  ['https://picsum.photos/1600/900?seed=keyboard', 'public/images/keyboard.jpg'],
  ['https://picsum.photos/1600/900?seed=mouse', 'public/images/mouse.jpg'],
  ['https://picsum.photos/1600/900?seed=monitor32', 'public/images/monitor-32.jpg'],
  ['https://picsum.photos/1600/900?seed=cooler', 'public/images/cooler.jpg'],
  ['https://picsum.photos/1600/900?seed=headset', 'public/images/headset.jpg']
];

async function download() {
  for (const [url, out] of images) {
    console.log('Downloading', url, '->', out);
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
    await streamPipeline(res.body, fs.createWriteStream(out));
  }
  console.log('All images downloaded');
}

download().catch(err => { console.error(err); process.exit(1); });
