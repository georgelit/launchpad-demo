sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("ysc.websocket.controller.WebOrder", {
		onInit: function () {
				var oViewModel = new sap.ui.model.json.JSONModel();
				oViewModel.loadData('./model/orderData.json');
				this.getView().setModel(oViewModel, "orderModel");
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
		}

	});

});