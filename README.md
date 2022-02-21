# AWS CDK Expect State

This construct lib provides `ExpectState`, a Step Functions State Machine
state that uses expect-like assertions to check input.

```ts
import { App, Stack } from 'aws-cdk-lib';
import { Chain, Pass, StateMachine } from 'aws-cdk-lib/aws-stepfunctions';
import { Assert, ExpectState, Expr } from '../src';

const app = new App();
const stack = new Stack(app, 'integ-cdk-sfn-integ');

const input = new Pass(stack, 'TestInput', {
  parameters: {
    integ: true,
    number: 1,
  },
});

const expect = new ExpectState(stack, 'TestExpect', {
  assert: Assert.expressions([
    // Expect-like assertions
    Expr.expect(Expr.input()).toEqual(
      Expr.objectContaining({
        integ: true,
        number: Expr.anything(),
      }),
    ),
    Expr.expect(Expr.input('number')).not.toEqual(2),
  ]),
});

new StateMachine(stack, 'Test', {
  definition: Chain.start(input)
    .next(expect),
});

```