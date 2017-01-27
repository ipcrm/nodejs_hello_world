exports.install = function() {
    F.route('/', view_index);
    F.route('/{tagline}', view_index);
}

function view_index(tagline) {
    var self = this;
    if (!tagline) { tagline = 'software' }
    self.view('index', { tagline: tagline });
}
