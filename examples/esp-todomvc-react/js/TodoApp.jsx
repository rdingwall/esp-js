/*global React*/
var app = app || {};

(function () {
    "use strict";

    var Header = app.Header,
        Main = app.Main,
        Footer = app.Footer;

    app.TodoApp = React.createClass({

        componentWillMount: function () {
            this.props.router
                .getModelObservable(this.props.modelId)
                .observe(function (model) {
                    this.setState({ model: model });
                }.bind(this));
        },

        render: function () {
            if (this.state === null) {
                return null;
            }

            var model = this.state.model,
                router = this.props.router;

            return (
                <div>
                    <Header
                        router={router}
                        modelId={this.props.modelId}
                    />
                    <Main
                        model={model.main}
                        router={router}
                        modelId={this.props.modelId}
                    />
                    <Footer
                        model={model.footer}
                        router={router}
                        modelId={this.props.modelId}
                    />
                </div>
            );
        }
    });
}());