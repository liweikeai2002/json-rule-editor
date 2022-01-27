import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SweetAlert from 'react-bootstrap-sweetalert';
import AddAttributes from './add-atrribtues';
import { PanelBox } from '../panel/panel';


class AttributeDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {removeAlert: false, successAlert: false};
        this.handleRemove = this.handleRemove.bind(this);
        this.remove = this.remove.bind(this);
        this.cancelAlert = this.cancelAlert.bind(this);
        this.updateAttribute = this.updateAttribute.bind(this);
    }

    handleEdit(e, val) {
        e.preventDefault();
        this.setState({showRuleIndex: val});
    }

    handleRemove(e, attribute, index) {
        e.preventDefault();
        this.setState({removeAlert: true, activeAttribute: attribute, activeAttributeIndex: index});
        
    }

    remove() {
        const { activeAttribute, activeAttributeIndex } = this.state;
        this.props.removeAttribute('REMOVE', activeAttribute, activeAttributeIndex);
        this.setState({ successAlert: true});
    }

    cancelAlert() {
        this.setState({ removeAlert: false, successAlert: false, showRuleIndex: -1 });
    }

    updateAttribute(attribute) {
        this.setState({ showRuleIndex: -1 });
        this.props.updateAttribute('UPDATE', attribute, this.state.showRuleIndex);
    }

    removeAlert = () => {
        return (<SweetAlert
            warning
            showCancel
            confirmBtnText="确定删除!"
            confirmBtnBsStyle="danger"
            title="是否确认?"
            onConfirm={this.remove}
            onCancel={this.cancelAlert}
            focusCancelBtn
          >
            即将丢失所有修改后的数据！
          </SweetAlert>)
    }

    successAlert = () => {
        return (<SweetAlert
            success
            title={"已删除!!"}
            onConfirm={this.cancelAlert}
          >
          </SweetAlert>);
    }

    render() {
    
    const { attributes } = this.props;
    const { showRuleIndex } = this.state;

    const buttonProps = { primaryLabel: '保存', secondaryLabel: '取消'};


    const attrList = attributes.map((attr, index) => 
    (<div key={attr.name}>
        <PanelBox className={attr.type}>
            <div className="index">{index + 1}</div>
            <div className="name">{attr.name}</div>
            <div className="type"><span className={attr.type}>{attr.type}</span></div>
            <div className="menu">
                <a href="" onClick={(e) => this.handleEdit(e, index)}>修改</a>
                <a href="" onClick={(e) => this.handleRemove(e, attr, index)}>删除</a>
            </div>
         </PanelBox>
         { showRuleIndex === index && <AddAttributes attribute={attr} addAttribute={this.updateAttribute} cancel={this.cancelAlert} buttonProps={buttonProps} />
         }
    </div>));

        return (<React.Fragment>
                {this.state.removeAlert && this.removeAlert()}
                {this.state.successAlert && this.successAlert()}
                {attrList}
            </React.Fragment>
        );
    }
}


AttributeDetails.defaultProps = ({
    attributes: [],
    updateAttribute: () => false,
    removeAttribute: () => false,
});

AttributeDetails.propTypes = ({
    attributes: PropTypes.array,
    updateAttribute: PropTypes.func,
    removeAttribute: PropTypes.func,
});

export default AttributeDetails;