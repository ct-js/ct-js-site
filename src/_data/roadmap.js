const axios  = require('axios'),
      toJSON = require('xml2js').parseString;

const md = require('jstransformer')(require('jstransformer-markdown-it'));

const urlToDo = 'https://gitlab.com/CoMiGo/ctjs/issues.atom?confidential=no&feed_token=Nw5AFsLU1Eps9SAzzdiu&label_name%5B%5D=To+Do&scope=all&state=opened&utf8=%E2%9C%93',
      urlUpcoming = 'https://gitlab.com/CoMiGo/ctjs/issues.atom?confidential=no&feed_token=Nw5AFsLU1Eps9SAzzdiu&label_name%5B%5D=Current+Release&scope=all&state=opened&utf8=%E2%9C%93',
      urlRecentlyClosed = 'https://gitlab.com/CoMiGo/ctjs/issues.atom?confidential=no&feed_token=Nw5AFsLU1Eps9SAzzdiu&scope=all&state=closed&utf8=%E2%9C%93',
      urls = [urlToDo, urlUpcoming, urlRecentlyClosed];

module.exports = () => {
    var promises = urls.map(url =>
        new Promise((resolve, reject) => {
            axios.get(url)
            .then((response) => {
                // turn the feed XML into JSON
                toJSON(response.data, function (err, result) {
                    if (result.feed.entry) {
                        result.feed.entry.length = Math.min(result.feed.entry.length, 10);
                        result.feed.entry.forEach(entry => {
                            entry.issueId = '#' + entry.id[0].split('/').pop();
                            if (entry.labels) {
                                entry.labels = entry.labels[0].label.filter(label => !(/(Next Release|To Do)/.test(label)));
                            } else {
                                entry.labels = [];
                            }
                            if (entry.description && entry.description[0]) {
                                entry.description = md.render(entry.description[0], {
                                    plugins: [
                                        'markdown-it-checkbox'
                                    ]
                                }).body;
                            }
                        });
                    }
                    resolve({'url': url, 'posts': result.feed.entry});
                });
            })
            .catch((error) => {
                reject(error);
            });
        }));
    return Promise.all(promises); 
};
