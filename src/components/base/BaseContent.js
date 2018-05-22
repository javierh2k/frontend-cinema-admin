import React, { Component}  from 'react';

export const BaseContent = (ComposedComponent, title) => class extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="row">
                    <div className="col-md-12">
                        <div className="box">
                            <div className="box-header with-border">
                                <h3 className="box-title">{title}</h3>
                            </div>
                            <div className="box-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <ComposedComponent {...this.props} /> 
                                    </div>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="description-block border-right pull-right">
                                            <span className="description-percentage text-green"><i className="fa fa-caret-up"></i> Admin Javier Holguin</span>
                                        </div>
                                    </div>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
    }
}

