import {ValidationRule} from "antd/es/form";

/**
 * 通用验证规则定义
 */
export interface CommonValidatorRule extends ValidationRule {

    /**
     * 验证的值
     */
    validatorValue: any;
}
