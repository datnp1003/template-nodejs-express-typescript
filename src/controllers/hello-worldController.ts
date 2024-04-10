import { Request, Response } from 'express';
import { Controller, Get, Route, Tags } from 'tsoa';
@Tags("HelloWorld")
@Route('api/HelloWorld')
export class HelloWorldController extends Controller {
  @Get('getHelloWorld/')
  public async getHelloWorld(): Promise<string> {
    return 'Hello World from the controller with tsoa!';
  }
}