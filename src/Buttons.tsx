import * as React from "react";
import { Button, Intent } from "@blueprintjs/core";

import { Example } from "./Example";
import { PureFunction, mathOporation } from "./PureFunction";

interface ButtonLevels {
  primary: number;
  danger: number;
}

const anotherPureFunction: PureFunction = (initial, value, oporator) =>
  PureFunction(initial, value, oporator);
const danderFunction: PureFunction = (initial, value, oporator) =>
  PureFunction(initial, value, oporator);

export class Buttons extends React.PureComponent<ButtonLevels, ButtonLevels> {
  public state = {
    primary: 1,
    warning: 1
  };

  private setPrimary = (primary: number) => this.setState({ primary });
  private setWarning = (warning: number) => this.setState({ warning });
  private setDanger = (danger: number) => this.setState({ danger });

  public render() {
    return (
      <Example header="Typescript interfaces and testing - Button.tsx">
        <p>
          There is a state warning due to implimenting a part of state that
          doesn't exist in interface.
        </p>
        <p>
          You will also notice a warning within the setWarning method due to it
          setting an area of state that is not defined in the interface.
        </p>
        <p>
          Finally further down the page you will see a wanrning in the
          PrimaryButtonFunction call due to passing "*". It is a valid value for
          the function to work however Typescript is enforcing the expection of
          using the enum.
        </p>
        <p>
          With the exception of danger, which fails due to NaN the code still
          works but will warn of impending doom.
        </p>
        <h3>Buttons:</h3>
        <Button
          intent={Intent.PRIMARY}
          text={`Primary: ${this.state.primary}`}
          onClick={() =>
            this.setPrimary(PureFunction(this.state.primary, 15, "*"))
          }
        />
        <Button
          intent={Intent.WARNING}
          text={`Warning: ${this.state.warning}`}
          onClick={() =>
            this.setWarning(
              anotherPureFunction(
                this.state.warning,
                15,
                mathOporation.subtraction
              )
            )
          }
        />
        <Button
          intent={Intent.DANGER}
          text={`Danger: ${this.state.danger}`}
          onClick={() =>
            this.setDanger(
              danderFunction(this.state.danger, 15, mathOporation.addition)
            )
          }
        />
      </Example>
    );
  }
}
