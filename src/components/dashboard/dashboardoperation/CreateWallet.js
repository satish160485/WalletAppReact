import React, { Component } from 'react'
import { createwallet } from '../../../actions/ProjectActions'
import { connect } from 'react-redux'
import classNames from 'classnames'

class CreateWallet extends Component {

    constructor(props) {
        super(props)

        this.state = {
            accName: '',
            accNumber: '',
            desc: '',
            priority: '',
            errors:''
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors:nextProps.errors});
        }
    }

    changeHandler = (event, fieldName) => {
        this.setState({
            [fieldName]: event.target.value
        })
    }

    submitHandler = (event) => {
        const newWallet = {
            accName: this.state.accName,
            accNumber: this.state.accNumber,
            desc: this.state.desc,
            priority: this.state.priority
        }
        this.props.createwallet(newWallet,this.props.history)
        event.preventDefault();
    }

    render() {
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Create Wallet</h5>
                            <hr />
                            <form onSubmit={(event)=>this.submitHandler(event)}>
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.changeHandler(event, "accName")} className={classNames("form-control form-control-lg ",{"is-invalid":this.state.errors.accName})} placeholder="Account Name" />
                                    <p className="text-danger">{this.state.errors.accName}</p>
                                </div>
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.changeHandler(event, "accNumber")} className={classNames("form-control form-control-lg",{"is-invalid":this.state.errors.accNumber})} placeholder="Account No" />
                                    <p className="text-danger">{this.state.errors.accNumber}</p>
                                </div>
                                <div className="form-group">
                                    <textarea onChange={(event) => this.changeHandler(event, "desc")} className={classNames("form-control form-control-lg",{"is-invalid":this.state.errors.accNumber})} placeholder="Description"></textarea>
                                    <p className="text-danger">{this.state.errors.accNumber}</p>
                                </div>
                                <div className="form-group">
                                    <select onChange={(event) => this.changeHandler(event, "priority")} className="form-control form-control-lg">
                                        <option value={0}>Display Priority</option>
                                        <option value={1}>High</option>
                                        <option value={2}>Medium</option>
                                        <option value={3}>Low</option>
                                    </select>
                                    <p className="text-danger">{this.state.errors.priority}</p>
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4" value="Create/Update" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    errors:state.errors
})

export default connect(mapStateToProps, {createwallet})(CreateWallet); 