var ServerService = function(Restangular, messageModel) {

    this.getServers = function() {
        return Restangular.all('server').getList();
    };

    this.getServer = function(id) {
        return Restangular.one("server", id).get();
    };

    this.updateServer = function(server) {
        return server.put()
            .then(
                function() {
                    messageModel.setMessages([ { level: 'success', text: 'Server updated' } ], false);
                },
                function() {
                    messageModel.setMessages([ { level: 'error', text: 'Server update failed' } ], false);
                }
            );
    };

};

ServerService.$inject = ['Restangular', 'messageModel'];
module.exports = ServerService;