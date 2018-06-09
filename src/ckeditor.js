/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import DecoupledEditorBase from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor';
import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
import AlignmentPlugin from '@ckeditor/ckeditor5-alignment/src/alignment';
import FontsizePlugin from '@ckeditor/ckeditor5-font/src/fontsize';
import FontfamilyPlugin from '@ckeditor/ckeditor5-font/src/fontfamily';
import HighlightPlugin from '@ckeditor/ckeditor5-highlight/src/highlight';
import UploadadapterPlugin from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import AutoformatPlugin from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
import StrikethroughPlugin from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import UnderlinePlugin from '@ckeditor/ckeditor5-basic-styles/src/underline';
import BlockquotePlugin from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CollaborativeeditingPlugin from '@ckeditor/ckeditor5-collaboration/src/collaborativeediting';
import PresencelistPlugin from '@ckeditor/ckeditor5-collaboration/src/presencelist';
import CollaborativecommentsPlugin from '@ckeditor/ckeditor5-collaboration/src/collaborativecomments';
import EasyimagePlugin from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import HeadingPlugin from '@ckeditor/ckeditor5-heading/src/heading';
import ImagePlugin from '@ckeditor/ckeditor5-image/src/image';
import ImagecaptionPlugin from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImagestylePlugin from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImagetoolbarPlugin from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageuploadPlugin from '@ckeditor/ckeditor5-image/src/imageupload';
import LinkPlugin from '@ckeditor/ckeditor5-link/src/link';
import ListPlugin from '@ckeditor/ckeditor5-list/src/list';
import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';

export default class DecoupledEditor extends DecoupledEditorBase {}

DecoupledEditor.build = {
	plugins: [
		EssentialsPlugin,
		AlignmentPlugin,
		FontsizePlugin,
		FontfamilyPlugin,
		HighlightPlugin,
		UploadadapterPlugin,
		AutoformatPlugin,
		BoldPlugin,
		ItalicPlugin,
		StrikethroughPlugin,
		UnderlinePlugin,
		BlockquotePlugin,
		CollaborativeeditingPlugin,
		PresencelistPlugin,
		CollaborativecommentsPlugin,
		EasyimagePlugin,
		HeadingPlugin,
		ImagePlugin,
		ImagecaptionPlugin,
		ImagestylePlugin,
		ImagetoolbarPlugin,
		ImageuploadPlugin,
		LinkPlugin,
		ListPlugin,
		ParagraphPlugin
	],
	config: {
		toolbar: {
			items: [
				'heading',
				'|',
				'fontsize',
				'fontfamily',
				'|',
				'bold',
				'italic',
				'underline',
				'strikethrough',
				'highlight',
				'|',
				'alignment',
				'|',
				'numberedList',
				'bulletedList',
				'|',
				'link',
				'blockquote',
				'imageUpload',
				'|',
				'undo',
				'redo',
				'|',
				'comment'
			]
		},
		image: {
			styles: [
				'full',
				'alignLeft',
				'alignRight'
			],
			toolbar: [
				'imageStyle:alignLeft',
				'imageStyle:full',
				'imageStyle:alignRight',
				'|',
				'imageTextAlternative',
				'|',
				'comment'
			]
		},
		heading: {
			options: [
				{
					model: 'paragraph',
					title: 'Paragraph',
					'class': 'ck-heading_paragraph'
				},
				{
					model: 'heading1',
					view: 'h1',
					title: 'Heading 1',
					'class': 'ck-heading_heading1'
				},
				{
					model: 'heading2',
					view: 'h2',
					title: 'Heading 2',
					'class': 'ck-heading_heading2'
				},
				{
					model: 'heading3',
					view: 'h3',
					title: 'Heading 3',
					'class': 'ck-heading_heading3'
				},
				{
					model: 'heading4',
					view: 'h4',
					title: 'Heading 4',
					'class': 'ck-heading_heading4'
				},
				{
					model: 'heading5',
					view: 'h5',
					title: 'Heading 5',
					'class': 'ck-heading_heading5'
				},
				{
					model: 'heading6',
					view: 'h6',
					title: 'Heading 6',
					'class': 'ck-heading_heading6'
				}
			]
		},
		language: 'en'
	}
};
