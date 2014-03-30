var HomeModule = function () {
    var selectors = {
        contactButton: '',
        aboutButton: ''
    }

    var urls = {
        contactUrl: '',
        aboutUrl: ''
    }

    var init = function () {
        $(selectors.contactButton).click(function () {
            window.location = urls.contactUrl;
        });

        $(selectors.aboutButton).click(function () {
            window.location = urls.aboutUrl;
        });
    }

    return {
        selectors: selectors,
        urls: urls,
        init: init,
    }
}();