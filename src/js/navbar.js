import {on} from 'shorter-js/src/event/on.js'
import {off} from 'shorter-js/src/event/off.js'
import {addClass} from 'shorter-js/src/class/addClass.js'
import {removeClass} from 'shorter-js/src/class/removeClass.js'
import {hasClass} from 'shorter-js/src/class/hasClass.js'
import {mouseHoverEvents} from 'shorter-js/src/strings/mouseHoverEvents.js'
import {getElementTransitionDuration} from 'shorter-js/src/misc/getElementTransitionDuration.js'
import {queryElement} from 'shorter-js/src/misc/queryElement.js'
import {tryWrapper} from 'shorter-js/src/misc/tryWrapper.js'

// Navbar
export default function Navbar(target, options) {
  options = options || {};

  // internal definitions
  let self = this,
    menu,
    items,
    navbarToggle,
    firstToggle,
    firstSubnav,
    transitionDuration,
    
    // class strings
    openClass = 'open',
    openPosition = 'open-position',
    openMobile = 'open-mobile',
    parentToggle = 'parent-toggle',

    // js options
    breakpointOption,
    toggleSiblingsOption,
    delayOption,

    // data-api
    dataBreakpoint,
    dataToggleSiblings,
    dataDelay,

    // set options
    breakpoint,
    toggleSiblings,
    delayDuration,
    
    // private methods
    close = function (element, leave) {
      if (hasClass(element,openClass)) {
        removeClass(element, openClass)
        if (leave) {
          setTimeout(function () {
            removeClass(element, openPosition)
            element.isOpen = 0
          }, transitionDuration)
        } else {
          removeClass(element, openPosition)
          element.isOpen = 0
        }
      } 
      if (hasClass(element,openMobile)) {
        removeClass(element,openMobile)
      }
    },

    // util
    checkView = function() {
      return firstToggle && getComputedStyle(firstToggle).display !== 'none' || window.innerWidth < breakpoint; 
    },
    toggleEvents = function(action) {
      Array.from(items).map(listItem => {
        if (hasClass(listItem.lastElementChild,'subnav') ) {
          action(listItem, mouseHoverEvents[0], enterHandler);
          action(listItem, mouseHoverEvents[1], leaveHandler);
        }
        let toggleElement = listItem.getElementsByClassName(parentToggle)[0]
        toggleElement && action(toggleElement, 'click', clickHandler); 
      })
      navbarToggle && action(navbarToggle, 'click', clickHandler);
    },

    // handlers
    clickHandler = function(e) {
      e.preventDefault();
      let that = this, lookup, element;
      if ( (e.target === that || that.contains(e.target)) ) {
        element = that.closest('li') || that.closest('.navbar');
        if ( !hasClass(element,openMobile) ) {
          addClass(element,openMobile);                        
          lookup = toggleSiblings ? element.parentNode.getElementsByTagName('LI') : element.getElementsByTagName('LI');
          Array.from(lookup).map(x=>x!==element && close(x));
        } else {
          removeClass(element,openMobile);
        }
      }
    },
    enterHandler = function () {
      let that = this; // this is now the event target, the LI
      clearTimeout(that.timer)
      if (!that.isOpen && !checkView() ) {
        that.timer = setTimeout(function(){
          addClass(that,openPosition)
          addClass(that,openClass)
          that.isOpen = 1
          Array.from(that.parentNode.getElementsByTagName('LI'))
                .map(x => x !== that && close(x))
        },17)
      }
    },
    leaveHandler = function() {
      let that = this;
      if (that.isOpen && !checkView()) {
        clearTimeout(that.timer)
        that.timer = setTimeout(() => close(that,1), delayDuration)
      }
    };

  // public method
  this.dispose = function() {
    toggleEvents(off)
    delete menu.Navbar
  }

  // initialize
  tryWrapper(()=>{

    // set internals
    menu = queryElement(target);

    // reset on re-init
    menu.Navbar && menu.Navbar.dispose();

    // set targets
    items = menu.getElementsByTagName('LI');
    navbarToggle = menu.getElementsByClassName('navbar-toggle')[0];
    firstToggle = menu.getElementsByClassName(parentToggle)[0];
    firstSubnav = menu.getElementsByClassName('subnav')[0];
    transitionDuration = firstSubnav ? getElementTransitionDuration(firstSubnav) : 0;
    // js options
    breakpointOption = options.breakpoint;
    toggleSiblingsOption = options.toggleSiblings;
    delayOption = options.delay;
    
    // data-api
    dataBreakpoint = menu.getAttribute('data-breakpoint');
    dataToggleSiblings = menu.getAttribute('data-toggle-siblings');
    dataDelay = menu.getAttribute('data-delay');
    
    // set options, JS options have a higher priority
    breakpoint = !isNaN(breakpointOption) ? breakpointOption : dataBreakpoint && !isNaN(dataBreakpoint) ? parseInt(dataBreakpoint) : 768;
    toggleSiblings = !!toggleSiblingsOption ? toggleSiblingsOption : dataToggleSiblings && dataToggleSiblings === 'true' ? 1 : 0;
    delayDuration = !isNaN(delayOption) ? delayOption : dataDelay && !isNaN(dataDelay) ? parseInt(dataDelay) : 500;
    
    // attach events
    toggleEvents(on)
    menu.Navbar = self
  },'Navbar')
}