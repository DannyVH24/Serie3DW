const fs = require('fs');
const { pipeline } = require('stream');
const { promisify } = require('util');
const streamPipeline = promisify(pipeline);

const images = [
  ['https://u-mercari-images.mercdn.net/photos/m11879502941_1.jpg?_=1752447230&quality=75&width=2560', 'public/images/gpu.jpg'],
  ['https://cdn.3dnews.ru/assets/external/illustrations/2018/01/03/963610/coffee-2.jpg', 'public/images/cpu.jpg'],
  ['https://media.cdn.kaufland.de/product-images/1024x1024/c7fd83bfa2790629cce898cd41eaec90.jpg', 'public/images/monitor-27.jpg'],
  ['https://www.memorycow.co.uk/image/cache/data/micron/ssd2025/micron-2500-m2-2280-ssd-gallery-1-550x550.jpg', 'public/images/ssd.jpg'],
  ['https://www.pckeyboard.com/mm5/graphics/00000001/UB40P4A_2.jpg', 'public/images/keyboard.jpg'],
  ['https://img.magnific.com/premium-photo/gaming-mouse-isolated-grayishwhite-background-product-photography_1106493-157132.jpg?q=80&semt=ais_hybrid&w=740', 'public/images/mouse.jpg'],
  ['https://i5.walmartimages.com/asr/cf91bbc7-3862-498c-9eec-0c66b7a6c676.1ad8afbabb587a62fd7bfb7f944e2ea0.jpeg?odnBg=FFFFFF&odnHeight=768&odnWidth=768', 'public/images/monitor-32.jpg'],
  ['https://p.globalsources.com/IMAGES/PDT/B6040817077/CPU-Cooler.jpg', 'public/images/cooler.jpg'],
  ['https://eagleco.net/uploads/products/5cf84eaf-0451-4cf3-bee8-15386d7461ac.jpg', 'public/images/headset.jpg']
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
