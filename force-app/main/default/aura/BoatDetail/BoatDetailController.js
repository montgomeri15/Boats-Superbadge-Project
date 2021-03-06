({
    init: function(component, event, helper) {
        component.set("v.enableFullDetails", $A.get("e.force:navigateToSObject"));
    },
    
    onFullDetails: function(component, event, helper) {
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({"recordId": component.get("v.boat.Id")});
        navEvt.fire();
    },
    
    onBoatSelected : function(component, event, helper) {
        var boatSelected = event.getParam("boat");
        component.set("v.boat", boatSelected);
        var service = component.find("service");
        service.reloadRecord();
    },
})