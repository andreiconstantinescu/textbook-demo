define(["backbone","../net/net","app"],function(Backbone,Net,App){var net=Net.singleton(),NameInput=Backbone.View.extend({initialize:function(){this.render()},tagName:"input",render:function(){var self=this,inside=!1;self.$el.val(net.getDisplayName()),self.$el.on("change keydown",function(evt){("change"===evt.type||13===evt.keyCode)&&(inside=!0,net.setDisplayName(self.$el.val()),inside=!1)}),self.listenTo(App,"classroom:displayName:change",function(val){inside||self.$el.val(val)})}});return NameInput});