import ucNew from '../../dist/uploadcare.full'
import ucOld from 'https://ucarecdn.com/libs/widget/3.7.9/uploadcare.full.js'

import { compare } from './isKeyOkey'

compare(ucOld, ucNew, 'uploadcare.full.js')
