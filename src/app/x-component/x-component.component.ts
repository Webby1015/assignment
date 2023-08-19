import { Component } from '@angular/core';

@Component({
  selector: 'app-x-component',
  templateUrl: './x-component.component.html',
  styleUrls: ['./x-component.component.css']
})
export class XComponent {
  xComponents: { name: string, ys: string[] }[] = [];

  addX() {
    this.xComponents.push({ name: '', ys: [] });
  }

  saveX(xIndex: number) {
    
    const xComponent = this.xComponents[xIndex];
    console.log(`Saving X${xIndex + 1}:`, xComponent);

  }

  addY(xIndex: number) {
    this.xComponents[xIndex].ys.push('');
  }

  saveY(xIndex: number, yIndex: number) {
    
    const yComponent = this.xComponents[xIndex].ys[yIndex];
    console.log(`Saving Y${yIndex + 1} of X${xIndex + 1}:`, yComponent);
    
  }

  downloadJsonFile() {
    const formattedData: any = {};
    this.xComponents.forEach((xComponent, xIndex) => {
      const xName = `X${xIndex + 1}`;
      formattedData[xName] = {};
      formattedData[xName].ys = xComponent.ys;
    });

    const jsonData = JSON.stringify(formattedData, null, 2); 
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'data.json';
    link.click();
    window.URL.revokeObjectURL(url);
  }
}
