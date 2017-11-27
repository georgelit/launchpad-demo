sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("ysc.websocket.controller.WebOrder", {
		onInit: function () {
				var oViewModel = new sap.ui.model.json.JSONModel();
				oViewModel.loadData('./model/orderData.json');
				this.getView().setModel(oViewModel, "orderModel");
				
				
			// 	var oTemplate = new sap.m.ColumnListItem({
			// 		cells: [
			// 			new sap.m.Input({
			// 				value: "{orderModel>seq}"
			// 			}), new sap.m.Input({
			// 				value: "{orderModel>req_date}"
			// 			}), new sap.m.Input({
			// 				value: "{orderModel>rdd_date}"
			// 			}), new sap.m.Input({
			// 				value: "{orderModel>kunag}"
			// 			}), new sap.m.Input({
			// 				value: "{orderModel>kunagt}"
			// 			}), new sap.m.Input({
			// 				value: "{orderModel>kunnr}"
			// 			}), new sap.m.Input({
			// 				value: "{orderModel>kunnrt}"
			// 			}), new sap.m.Input({
			// 				value: "{orderModel>matnr}"
			// 			}), new sap.m.Input({
			// 				value: "{orderModel>ord_lfimg}"
			// 			}), new sap.m.Input({
			// 				value: "{orderModel>req_qty}",
			// 				description: "{orderModel>meins}"
			// 			}), new sap.m.Input({
			// 				value: "{orderModel>arv_date}"
			// 			})
			// 		]
			// 	});
				
			// 	var oTable = this.getView().byId("idProductsTable");
			// 	oTable.bindItems({
			// 	// path: "/ProductCollection",
			// 	template: oTemplate
			// 	// key: "ProductId"
			// }).setKeyboardMode(true);
			
		},
		onBtn1Press: function() {
			this.getView().byId("btn2").setPressed(false);
			this.getView().byId("btn3").setPressed(false);
		},
		onBtn2Press: function() {
			this.getView().byId("btn1").setPressed(false);
			this.getView().byId("btn3").setPressed(false);
		},
		onBtn3Press: function() {
			this.getView().byId("btn1").setPressed(false);
			this.getView().byId("btn2").setPressed(false);
		},
		rebindTable: function(oTemplate, sKeyboardMode) {
			this.oTable.bindItems({
				path: "/ProductCollection",
				template: oTemplate,
				key: "ProductId"
			}).setKeyboardMode(sKeyboardMode);
		}

	});

});