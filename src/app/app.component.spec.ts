/* tslint:disable:no-unused-variable */

import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";

// a test is a just a script we run in dev/test mode in our application
// it is supposed to simulate the action / the interaction of a user on the application
// it is also the expression of unit tests following the specifications expected from the app
// so we need as many "it" actions as there are of actions to be tested

describe("App: CompleteGuideFinalWebpack", () => {
  // describe the unit to be tested : the app (AppComponent)
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    });
  });

  // each it block is independent and is not influenced by the previous "it" block.
  // before each it block, beforeEach is executed

  // check if app is properly created
  // "it" should create the app...
  it("should create the app", async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    // .. and so expect the app (fixture>app) to be true, simple example...
    expect(app).toBeTruthy();
  }));

  // it, the app, should have a title property which equals "app works!"
  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("app works!");
  }));

  it("should render title in a h1 tag", async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain("app works!");
  }));
});
