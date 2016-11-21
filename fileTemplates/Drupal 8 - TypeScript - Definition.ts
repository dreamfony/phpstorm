## kate: syntax Velocity;
#set($name = $NAME.replace('drupal.', ''))
#set($name = $name.replace('.d', ''))
#set($nameFirst = $name.substring(0, 1).toUpperCase())
#set($nameRest = $name.substring(1))
#set($nameCapital = "$nameFirst$nameRest")


declare module drupal {
#if($hasBehavior)

    export module Core {
    
        export interface IBehaviors {
        
            /**
             *
             */
            $name?: IBehavior;
        
        }
    
    }
#end
#if($hasDrupalSettings != "" || $hasDrupalStatic != "")
    
    export module $nameCapital {
#if($hasDrupalSettings != "")

        export interface IDrupalSettings {
        
            //
        
        }
#end
#if($hasDrupalStatic != "")

        export interface IDrupalStatic {
        
            //
        
        }
#end

    }
#end
#if($hasDrupalSettings != "")

    export interface IDrupalSettings {
    
        $name?: ${nameCapital}.IDrupalSettings;
    
    }
#end
#if($hasDrupalStatic != "")

    export interface IDrupalStatic {
    
        $name?: ${nameCapital}.IDrupalStatic;
    
    }
#end

}
