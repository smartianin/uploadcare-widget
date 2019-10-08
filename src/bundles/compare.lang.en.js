import ucNew from '../../dist/uploadcare.lang.en'
import ucOld from 'https://ucarecdn.com/libs/widget/3.7.9/uploadcare.lang.en.js'

import { compare } from './isKeyOkey'

compare(ucOld, ucNew, 'uploadcare.lang.en.js')
