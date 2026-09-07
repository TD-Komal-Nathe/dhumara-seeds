const puppeteer = require('puppeteer');
const path = require('path');

async function generatePDF(htmlFile, outputFile) {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    // We construct a file URL for the local HTML file
    const fileUrl = `file:///${path.resolve(__dirname, htmlFile).replace(/\\/g, '/')}`;
    console.log(`Loading ${fileUrl}...`);
    
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });
    
    // Generate PDF
    await page.pdf({
        path: path.resolve(__dirname, '../../public', outputFile),
        format: 'A4',
        printBackground: true,
        margin: { top: '0', right: '0', bottom: '0', left: '0' }
    });
    
    console.log(`Generated ${outputFile} successfully!`);
    await browser.close();
}

async function run() {
    try {
        await generatePDF('watermelon.html', 'Dhumara_seeds_Watermelon.pdf');
        await generatePDF('muskmelon.html', 'Dhumara_seeds_Muskmelon.pdf');
        console.log('All PDFs generated successfully.');
    } catch (error) {
        console.error('Error generating PDFs:', error);
    }
}

run();
