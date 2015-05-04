// same origin policy prevents cross-origin requests

// this function gets invoked by the JSONP script
function render(data) {
    var items = data.data.children;

    console.log(items.length);

    // items = items.filter(noOver18);
    // items = items.filter(hasImage);
    // items = items.map(simplify);

    items = items.filter(noOver18).filter(hasImage).map(simplify);

    console.log(items.length);

    items.forEach(renderLI);

    var totalComments = items.reduce(function(p, c, i) {
        return p + c.num_comments;
    }, 0);

    console.log(totalComments);

    var averageComments = totalComments / items.length;

    console.log(averageComments);

    var averageComments2 = items.reduce(function(p, c, i) {
        // p + (c - p) / (i + 1)
        return p + (c.num_comments - p) / (i + 1);
    }, 0);

    console.log(averageComments2);
}

function noOver18(item) {
    return !item.data.over_18;
}

function hasImage(item) {
    return !!item.data.thumbnail;
}

function simplify(item) {
    return {
        title: item.data.title,
        url: item.data.url,
        num_comments: item.data.num_comments,
        thumbnail: item.data.thumbnail
    };
}

function renderLI(item) {
    var li = document.createElement('li');

    if (item.thumbnail) {
        var img = document.createElement('img');
        img.src = item.thumbnail;
        li.appendChild(img);
    }

    li.appendChild(document.createTextNode(item.title));

    document.getElementById('list').appendChild(li);
}
