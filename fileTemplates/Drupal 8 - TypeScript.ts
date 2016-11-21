## kate: syntax Velocity;
#set($params = {
  "jQuery": {
    "global": "jQuery",
    "local": "$",
    "type": "JQueryStatic", 
    "enabled": $hasJQuery
  },
  "Drupal": {
    "global": "Drupal",
    "local": "Drupal",
    "type": "drupal.IDrupalStatic", 
    "enabled": $hasDrupal
  },
  "drupalSettings": {
    "global": "drupalSettings",
    "local": "drupalSettings",
    "type": "drupal.IDrupalSettings", 
    "enabled": $hasDrupalSettings
  }
})
## Line 22.
#set($param = {})
#set($signature = "")
#set($arguments = "")
#set($newLine = "
")
##
#foreach($param in $params)
#if($param.enabled != "")
#set($signature = "$signature,$newLine    ${param.local}: ${param.type}")
#set($arguments = "$arguments, ${param.global}")
#end
#end
##
#if($signature != "")
#set($signature = $signature.substring(1))
#set($signature = "${signature}${newLine}")
#set($arguments = $arguments.substring(2))
#end
##

(function ($signature) : void {

    'use strict';

})($arguments);
