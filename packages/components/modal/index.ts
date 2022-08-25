// step2. 引入组件，并创建install方法

import Modal from './src/Modal'
import { createInstall } from '@wiew-ui/utils';

export const WModal = createInstall(Modal)
export default WModal