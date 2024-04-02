/*-------------------------------------------------------------------
|  🐼 Function isFormInvalid
|
|  🐯 Purpose: CHECKS IF FORM IS VALID OR NOT
|
|  🐸 Returns:  OBJECT
*-------------------------------------------------------------------*/

interface ErrorObject {
  [key: string]: string;
}

export const isFormInvalid = (err: any) => {
  if (Object.keys(err).length > 0) return true;
  return false;
};
