const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// Function to extract text from HTML content using cheerio
function extractTextFromHTML(html) {
    const $ = cheerio.load(html);
    let fullText = '';

    // Extract text from all elements, including data attributes
    $('*').each(function() {
        // Add the element's own text
        fullText += $(this).clone().children().remove().end().text() + ' ';

        // Add text from data-fr and data-ar attributes
        if ($(this).attr('data-fr')) {
            fullText += $(this).attr('data-fr') + ' ';
        }
        if ($(this).attr('data-ar')) {
            fullText += $(this).attr('data-ar') + ' ';
        }
    });

    return fullText.replace(/\s+/g, ' ').trim();
}

// Main function to build the search index
async function buildSearchIndex() {
    const files = fs.readdirSync(__dirname);
    const searchData = [];

    for (const file of files) {
        if (file.endsWith('.html')) {
            const filePath = path.join(__dirname, file);
            const content = fs.readFileSync(filePath, 'utf-8');
            
            const $ = cheerio.load(content);
            const title = $('title').text() || path.basename(file, '.html');
            const textContent = extractTextFromHTML(content);

            searchData.push({
                title: title,
                url: file,
                content: textContent
            });
        }
    }

    fs.writeFileSync('search-data.json', JSON.stringify(searchData, null, 2));
    console.log('Search index built successfully!');
}

buildSearchIndex();