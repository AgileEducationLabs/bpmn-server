import { Transaction } from "../elements";

enum BPMN_TYPE {
    UserTask = 'bpmn:UserTask',
    ScriptTask = 'bpmn:ScriptTask',
    ServiceTask = 'bpmn:ServiceTask',
    SendTask = 'bpmn:SendTask',
    ReceiveTask = 'bpmn:ReceiveTask',
    BusinessRuleTask = 'bpmn:BusinessRuleTask',
    SubProcess = 'bpmn:SubProcess',
    AdHocSubProcess ='bpmn:AdHocSubProcess',
    ParallelGateway = 'bpmn:ParallelGateway',
    EventBasedGateway = 'bpmn:EventBasedGateway',
    InclusiveGateway = 'bpmn:InclusiveGateway',
    ExclusiveGateway = 'bpmn:ExclusiveGateway',
    BoundaryEvent = 'bpmn:BoundaryEvent',
    StartEvent = 'bpmn:StartEvent',
    IntermediateCatchEvent = 'bpmn:IntermediateCatchEvent',
    IntermediateThrowEvent = 'bpmn:IntermediateThrowEvent',
    EndEvent = 'bpmn:EndEvent',
    SequenceFlow = 'bpmn:SequenceFlow',
    MessageFlow = 'bpmn:MessageFlow',
    CallActivity = 'bpmn:CallActivity',
    Transaction = 'bpmn:Transaction'
}

enum NODE_SUBTYPE {
    timer = 'timer',
    message = 'message',
    signal = 'signal',
    error = 'error',
    escalation = 'escalation',
    cancel = 'cancel',

    compensate = 'compensate'
}
/*
 * ALL events 
 */
enum EXECUTION_EVENT {
    node_enter = 'enter',
    node_assign = 'assign',
    node_validate = 'validate',
    node_start = 'start',
    node_wait = 'wait',
    node_end = 'end',
    node_terminated = 'terminated',
    transform_input = 'transformInput',
    transform_output = 'transformOutput',
    flow_take = 'take',
    flow_discard = 'discard',
    process_loaded ='process.loaded',
    process_start = 'process.start',   
    process_started = 'process.started',
    process_invoke = 'process.invoke',     
    process_invoked = 'process.invoked',
    process_saving = 'process.saving', 
    process_restored = 'process.restored', 
    process_resumed = 'process_resumed',
    process_wait = 'process.wait',
    process_end = 'process.end',
    process_terminated = 'process.terminated',
    process_exception = 'process.exception',
    token_start = 'token.start',
    token_wait = 'token.wait',
    token_end = 'token.end',
    token_terminated = 'token.terminated',
    process_error = 'process.error'
}
/*
 *  possible actions by node
 */

enum NODE_ACTION { continue = 1, wait,  end , cancel, stop , error , abort  };

enum ITEM_STATUS {
    enter = 'enter',
    start = 'start',
    wait = 'wait',
    end = 'end',
    terminated = 'terminated',
    cancelled = 'cancelled',
    discard = 'discard'

}

//type ITEMSTATUS = 'enter' | 'start' | 'wait' | 'end' | 'terminated' | 'discard';

enum EXECUTION_STATUS { running='running',wait='wait', end = 'end' , terminated ='terminated' }

enum TOKEN_STATUS { running = 'running', wait = 'wait', end = 'end', terminated = 'terminated' , queued = 'queued' }
/*
 * possible actions by flow
 */
//   must be same as above

enum FLOW_ACTION { take = 'take', discard = 'discard' }

export {
    BPMN_TYPE ,
    EXECUTION_EVENT, NODE_ACTION, FLOW_ACTION,
    ITEM_STATUS, TOKEN_STATUS, EXECUTION_STATUS , NODE_SUBTYPE
}