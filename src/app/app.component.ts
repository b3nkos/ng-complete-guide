import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  serverElements = [
    {
      type: 'server',
      name: 'Test Name of server',
      content: 'Text description of server'
    }
  ];

  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  onHandleNumberGenerated(numberGenerated: number ): void {
    if (numberGenerated % 2 === 0) {
      this.evenNumbers.push(numberGenerated);
    } else {
      this.oddNumbers.push(numberGenerated);
    }
  }

  onServerAdded(serverData: { serverName: string, serverContent: string }): void {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(serverData: { serverName: string, serverContent: string }): void {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onChangeFirst(): void {
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst(): void {
    this.serverElements.splice(0, 1);
  }
}
