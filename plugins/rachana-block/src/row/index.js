import { registerBlockType } from '@wordpress/blocks';
import defaultAttr from './defaultAttr.json';
import edit from './edit';
import save from './save';
import './style.css';
registerBlockType('rachana-block/row', {
    attributes: defaultAttr,
    edit,
    save,
});