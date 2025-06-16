import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import type { CellEditingStoppedEvent, ColDef, SideBarDef } from 'ag-grid-community'; // Column Definition Type Interface 
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpService } from '../http.service';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';

import { ModuleRegistry, ClientSideRowModelModule } from "ag-grid-community";
import { AllEnterpriseModule, IntegratedChartsModule } from "ag-grid-enterprise";
import { AgChartsEnterpriseModule } from 'ag-charts-enterprise';

ModuleRegistry.registerModules([
  AllEnterpriseModule,
  IntegratedChartsModule.with(AgChartsEnterpriseModule)
]);

// Register all Community features
// ModuleRegistry.registerModules([AllEnterpriseModule ]);
// ModuleRegistry.registerModules([ AllEnterpriseModule.with(AgChartsEnterpriseModule) ]);

@Component({
  standalone: true,
  selector: 'app-mis',
  imports: [AgGridAngular, CommonModule, RouterLink,],
  templateUrl: './mis.component.html',
  styleUrl: './mis.component.css'
})
export class MisComponent {

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getReports().subscribe((data) => {
      this.buttons = data.map((report: any) => ({
        headerName: report,
        queryReport: report,
        isActive: false
      }));
      if (this.buttons.length > 0) {
        this.updateGrid(this.buttons[0].queryReport);
      }
    });
  }

  buttons: { headerName: string, queryReport: string, isActive: boolean }[] = [];
  // buttons = [
  //   { headerName: 'Inventory', queryReport: 'inventory', isActive: false },
  //   { headerName: 'Supplier', queryReport: 'suppliers', isActive: false },
  //   { headerName: 'Orders', queryReport: 'orders', isActive: false },
  //   { headerName: 'Quotations', queryReport: 'quotations', isActive: false },
  // ];

  colDefs: ColDef[] = [];

  rowData = null;

  quantityCellStyle(params: any) {
    if (params.data && params.data.quantityInStock <= params.data.reorderLevel) {
      return { backgroundColor: '#ffe6e6', color: '#b30000', fontWeight: 'bold' };
    }
    return null;
  }

  // statusCellStyle(params: any) {
  //   const status = params.value;
  //   if (status == 'Pending') {
  //     return { backgroundColor: '#ffe6e6', color: 'yellow', fontWeight: 'bold' };
  //   } else if (status == 'Delivered') {
  //     return { backgroundColor: 'green', color: 'green', fontWeight: 'bold' };
  //   } else if (status == 'Cancelled') {
  //     return { backgroundColor: '#ffe6e6', color: 'black', fontWeight: 'bold' };
  //   }
  //   return null;
  // }
  orderStatusCellStyle(params: any) {
    const status = params.value;
    if (status === 'Pending') {
      return { backgroundColor: '#fff4cc', color: '#e6a800', fontWeight: 'bold' };
    } else if (status === 'Delivered') {
      return { backgroundColor: '#d1f5d3', color: '#1a7f2e', fontWeight: 'bold' };
    } else if (status === 'Confirmed') {
      return { backgroundColor: '#e0f0ff', color: '#007acc', fontWeight: 'bold' };
    } else if (status === 'Shipped') {
      return { backgroundColor: '#e6e6ff', color: '#4b4bff', fontWeight: 'bold' };
    } else if (status === 'Cancelled') {
      return { backgroundColor: '#ffe6e6', color: '#b30000', fontWeight: 'bold' };
    }
    return null;
  }
  quotStatusCellStyle(params: any) {
    const status = params.value;
    if (status === 'Pending') {
      return { backgroundColor: '#fff4cc', color: '#e6a800', fontWeight: 'bold' };
    } else if (status === 'Approved') {
      return { backgroundColor: '#d1f5d3', color: '#1a7f2e', fontWeight: 'bold' };
    } else if (status === 'Rejected') {
      return { backgroundColor: '#ffe6e6', color: '#b30000', fontWeight: 'bold' };
    }
    return null;
  }


  updateGrid(queryReport: string) {
    this.buttons.forEach(button => {
      button.isActive = button.queryReport === queryReport;
    });
    const reportRequest = { reportName: queryReport };
    this.httpService.getReportData(reportRequest).subscribe((data) => {
      this.colDefs = data.colDefs;
      this.rowData = data.rowData;
      this.colDefs.forEach((colDef: ColDef) => {
        if (colDef.field === 'quantityInStock') {
          colDef.cellStyle = this.quantityCellStyle;
        } else if (colDef.field === 'orderStatus') {
          colDef.cellStyle = this.orderStatusCellStyle;
        } else if (colDef.field === 'quotStatus') {
          colDef.cellStyle = this.quotStatusCellStyle;
        }
      });
    });
  }
  onCellEditingStopped = (
    event: any
  ) => {
    this.buttons.filter(button => button.isActive).forEach(button => {
      // console.log(`Button ${button.headerName} is active`);
      // console.log(event);
      const reportRequest = {
        reportName: button.queryReport,
        data: event.data
      }
      this.httpService.updateReport(reportRequest).subscribe((data) => {
        // console.log('Report updated successfully', data);
        this.colDefs = data.colDefs;
        this.rowData = data.rowData;
      })
    });
  };
}
