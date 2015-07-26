"use strict";

var React = require('react');
var ThreadListItem = require('../components/ThreadListItem.react');
var modelRouter = require('../model/modelRouter');

var ThreadSection = React.createClass({
    componentWillMount: function () {
        modelRouter
            .getModelObservable()
            .observe(function (model) {
                this.setState(model.threadSection);
            }.bind(this));
    },
    render: function () {
        if (this.state === null) {
            return null;
        }

        var threadListItems = this.state.sortedThreads.map(function (thread) {
                return (
                    <li>
                        <ThreadListItem
                            key={thread.id}
                            model={thread}
                        />
                    </li>
                );
            }, this);
        var unread = null;
        if (this.state.unreadCount.isVisible) {
            unread = <span>Unread threads: {this.state.unreadCount.value}</span>;
        }
        return (
            <div className="thread-section">
                <div className="thread-count">
                    {unread}
                </div>
                <ul className="thread-list">
                    {threadListItems}
                </ul>
            </div>
        );
    }

});

module.exports = ThreadSection;