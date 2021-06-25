import React, { Fragment } from "react";
import {
    getGeneralManager
} from "../../actions/Actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class GeneralManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {edit: false, new: false};

    }

    componentDidMount() {
        this.props.getGeneralManager();
    }

     clickHandler = (e) => {
        console.log(e.target.getAttribute('name'));
    }

    render() {
        return (
            <div id="page-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">Forms</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                أكواد مديري العموم
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <form role="form">
                                            <div className="form-group">
                                                <label>كود المستوى الوظيفي</label>
                                                <input className="form-control" placeholder="Enter text"  disabled={(this.state.new? false: true)} />
                                            </div>
                                            <div className="form-group">
                                                <label>كود الوصف الوظيفي</label>
                                                <input className="form-control" placeholder="Enter text" disabled={(this.state.new? false: true)} />
                                            </div>
                                            <div className="form-group">
                                                <label>المستوى الوظيفي</label>
                                                <input className="form-control" placeholder="Enter text" disabled={(this.state.new? false: true)}/>
                                            </div>
                                            <div className="form-group">
                                                <label>الوصف الوظيفي</label>
                                                <input className="form-control" placeholder="Enter text" disabled={(this.state.new? false: true)}/>
                                            </div>
                                            <div className="form-group">
                                                <label>ملاحظات</label>
                                                <textarea className="form-control" rows="3" disabled></textarea>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                Striped Rows
                                            </div>
                                            <div className="panel-body">
                                                <div style={{ overflow: "scroll", height: 320 }} className="table-responsive">
                                                    <table className="table table-striped">
                                                        <thead style={{ textAlign: "center" }}>
                                                            <tr>
                                                                <th>كود المستوى الوظيفي</th>
                                                                <th>كود الوصف الوظيفي</th>
                                                                <th>المستوى الوظيفي</th>
                                                                <th>الوصف الوظيفي</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {this.props.posts.map((gm) => (
                                                                <tr onClick={this.clickHandler}>
                                                                    <td name={gm.J_D_ID} onClick={this.clickHandler}>{gm.J_D_ID}</td>
                                                                    <td name={gm.J_D_ID} onClick={this.clickHandler}>{gm.SUP_BOX_ID}</td>
                                                                    <td name={gm.J_D_ID} onClick={this.clickHandler}>{gm.J_D_NAME}</td>
                                                                    <td name={gm.J_D_ID} onClick={this.clickHandler}>{gm.SUP_BOX_NAME}</td>
                                                                </tr>
                                                            ))
                                                            }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        posts: state.posts.items,

    };
};
export default connect(mapStateToProps, {
    getGeneralManager
})(GeneralManager);