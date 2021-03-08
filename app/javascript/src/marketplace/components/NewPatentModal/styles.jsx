import { StyleSheet } from 'aphrodite';
import { COLORS } from '../../../../constants';

export default StyleSheet.create({
  NewPatentModal_modal: {
    overflow: 'visible',
  },
  NewPatentModal_dateField: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  NewPatentModal_dateDropdown: {
    width: '32%',
    height: '48px',
    fontSize: '14px',
    display: 'inline-block',
    alignItems: 'center',
    borderRadius: '0px',
    paddingTop: '16px',
    color: COLORS.defaultText,
    border: `1px solid ${COLORS.defaultText}`,
  },
  NewPatentModal_statusDropdown: {
    height: '48px',
    fontSize: '14px',
    display: 'inline-block',
    borderRadius: '0px',
    paddingTop: '16px',
    color: COLORS.defaultText,
    border: `1px solid ${COLORS.defaultText}`,
  },
  NewPatentModal_modalFieldLabel: {
    textAlign: 'left',
    margin: '10px 0 6px',
    width: '100%',
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: '16px',
    color: COLORS.labelGray,
  },
  NewPatentModal_modalInput: {
    width: '100%',
    margin: 'auto',
    padding: '10px',
    height: '50px',
    fontSize: '14px',
    lineHeight: '20px',
    borderStyle: 'solid',
    borderWidth: '1px',
  },
  NewPatentModal_modalHeader: {
    fontWeight: 500,
    fontSize: '24px',
    lineHeight: '32px',
    color: COLORS.lightBlack,
    marginBottom: '32px',
  },
  NewPatentModal_modalTextArea: {
    width: '100%',
    margin: 'auto',
    padding: '10px',
    fontSize: '14px',
    lineHeight: '20px',
  },
  NewPatentModal_datepicker: {
    width: '100%',
    height: '50px',
    padding: '10px',
    borderStyle: 'solid',
    borderWidth: '1px',
    fontSize: '14px',
  },
  NewPatentModal_modalSubmitButton: {
    background: COLORS.lightBlue,
    backgroundImage: 'linear-gradient(134.72deg, #4E9DF5 0%, #48B2F4 100%)',
    display: 'inline-block',
    height: '48px',
    textAlign: 'center',
    color: COLORS.white,
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '20px',
    padding: '5px 50px',
  },
  NewPatentModal_modalButtonHolder: {
    width: '100%',
    display: 'inline-block',
    textAlign: 'right',
    marginTop: '36px',
  },
  NewPatentModal_modalCancelButton: {
    height: '48px',
    textAlign: 'center',
    color: COLORS.lightBlack,
    backgroundColor: COLORS.white,
    display: 'inline-block',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '20px',
    padding: '5px 50px',
  }
});
