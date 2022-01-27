

const NO_CHANGES_HEADER = '无任何修改';
const NO_CHANGES_BODY = '内容无修改，不需要生成!!!'
const BUTTON_PROPS_NO_CHANGES = {label: '生成知识库'};
export const NO_CHANGES_MSG = {header: NO_CHANGES_HEADER, body: NO_CHANGES_BODY, type: 'warning-panel'};


const MODIFIED_HEADER = '提交知识库';
const MODIFIED_BODY = '是否确认要提交知识库?'
export const MODIFIED_MSG = {header: MODIFIED_HEADER, body: MODIFIED_BODY, type: 'submit-panel', buttonProps: BUTTON_PROPS_NO_CHANGES,};


const NO_ATTRIBUTE_HEADER = '无知识属性';
const NO_ATTRIBUTE_BODY = '知识库中不存在知识属性.'
const BUTTON_PROPS_ATTRIBUTE = {label: '创建属性'};
export const NO_ATTRIBUTE_MSG = {header: NO_ATTRIBUTE_HEADER, body: NO_ATTRIBUTE_BODY, buttonProps: BUTTON_PROPS_ATTRIBUTE, type: 'warning-panel'};


const NO_DECISION_HEADER = '无知识规则';
const NO_DECISION_BODY = '知识库中不存在知识规则.'
const BUTTON_PROPS_DECISION = {label: '创建规则'};
export const NO_DECISION_MSG = {header: NO_DECISION_HEADER, body: NO_DECISION_BODY, buttonProps: BUTTON_PROPS_DECISION, type: 'warning-panel'};


const NO_VALIDATION_BODY = '知识库中不存在决策.'
export const NO_VALIDATION_MSG = {header: NO_DECISION_HEADER, body: NO_VALIDATION_BODY, type: 'warning-panel'};

export const RULE_AVAILABLE_CREATE = { type: 'warning', heading: '这条规则已存在' };

export const RULE_AVAILABLE_UPLOAD = { type: 'warning', heading: '<name>上传失败！' };

export const RULE_UPLOAD_ERROR = { type: 'error', heading: '上传文件错误. 请重试!!'};

export const RULE_ERROR = { type: 'error', heading: '对不起!,系统发生错误. 请重试'};