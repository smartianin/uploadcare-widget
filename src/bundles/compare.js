import ucNew from '../../dist/uploadcare'
import ucOld from 'https://ucarecdn.com/libs/widget/3.7.9/uploadcare.js'

import { compare } from './isKeyOkey'

compare(ucOld, ucNew, 'uploadcare.js')
