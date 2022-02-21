// ~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

/**
 * Props for ExpectFunction
 */
export interface ExpectFunctionProps extends lambda.FunctionOptions {
}

/**
 * An AWS Lambda function which executes src/expect.
 */
export class ExpectFunction extends lambda.Function {
  constructor(scope: Construct, id: string, props?: ExpectFunctionProps) {
    super(scope, id, {
      description: 'src/expect.lambda.ts',
      ...props,
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../assets/expect.lambda')),
    });
    this.addEnvironment('AWS_NODEJS_CONNECTION_REUSE_ENABLED', '1', { removeInEdge: true });
  }
}