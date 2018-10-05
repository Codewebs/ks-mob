import { StyleSheet } from 'react-native';
import AppStyles from '@config/styles';
import { isIphoneX } from '@lib/isIphoneX';

const styles = StyleSheet.create({
    container: {
        height: isIphoneX() ? 100 : null,
        backgroundColor: AppStyles.colors.black,
        justifyContent: 'flex-end',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: AppStyles.colors.separator
    },
    elevatedContainer: {
        height: isIphoneX() ? 100 : null,
        backgroundColor: AppStyles.colors.black,
        justifyContent: 'flex-end',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: AppStyles.colors.separator,
        elevation: 4
    },

  
});

export default styles;