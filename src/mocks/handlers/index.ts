import { propertyHandlers } from './properties.ts'

import { incidentHandlers } from './incidents'

/* import { employeeHandlers } from './employees' */

export const handlers = [

  ...propertyHandlers,

  ...incidentHandlers,
  
    /*...employeeHandlers, */

]