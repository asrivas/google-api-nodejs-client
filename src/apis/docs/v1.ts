/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { OAuth2Client, JWT, Compute, UserRefreshClient } from 'google-auth-library';
import { GoogleConfigurable, createAPIRequest, MethodOptions, GlobalOptions, BodyResponseCallback } from '../../shared/src';
import { AxiosPromise } from 'axios';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace docs_v1 {


export interface Options extends GlobalOptions {
  version: 'v1';
}

/**
 * Google Docs API
 *
 * An API for creating and editing Google Docs documents.
 *
 * @example
 * const {google} = require('googleapis');
 * const docs = google.docs('v1');
 *
 * @namespace docs
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Docs
 */
export class Docs {

  _options: GlobalOptions;
  google?: GoogleConfigurable;
  root = this;

            documents: Resource$Documents;
      
  constructor(options: GlobalOptions, google?: GoogleConfigurable) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

                  this.documents = new Resource$Documents(this);
            }

  getRoot() {
    return this.root;
  }


}

/**
  * A ParagraphElement representing a spot in the text that is dynamically replaced with content that can change over time, like a page number.
  */
export interface Schema$AutoText {
      /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     */
        suggestedDeletionIds?: string[];
        /**
     * The suggested insertion IDs. An AutoText may have multiple insertion IDs if it is a nested suggested change. If empty, then this is not a suggested insertion.
     */
        suggestedInsertionIds?: string[];
        /**
     * The type of this auto text.
     */
        type?: string;
  }
/**
  * Represents the background of a document.
  */
export interface Schema$Background {
      /**
     * The background color.
     */
        backgroundColor?: Schema$Color;
  }
/**
  * Request message for BatchUpdateDocument.
  */
export interface Schema$BatchUpdateDocumentRequest {
      /**
     * A list of updates to apply to the document.
     */
        requests?: Schema$Request[];
  }
/**
  * Response message from a BatchUpdateDocument request.
  */
export interface Schema$BatchUpdateDocumentResponse {
      /**
     * The identifier of the document to which the updates were applied to.
     */
        name?: string;
        /**
     * The reply of the updates. This maps 1:1 with the updates, although replies to some requests may be empty.
     */
        replies?: Schema$Response[];
  }
/**
  * The document body.  The body typically contains the full document contents except for headers, footers and footnotes.
  */
export interface Schema$Body {
      /**
     * The contents of the body.  The indices for the body&#39;s content begin at zero.
     */
        content?: Schema$StructuralElement[];
  }
/**
  * A solid color.
  */
export interface Schema$Color {
      /**
     * The RGB color value.
     */
        rgbColor?: Schema$RgbColor;
  }
/**
  * A ParagraphElement representing a column break. A column break makes the subsequent text start at the top of the next column.
  */
export interface Schema$ColumnBreak {
      /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     */
        suggestedDeletionIds?: string[];
        /**
     * The suggested insertion IDs. A ColumnBreak may have multiple insertion IDs if it is a nested suggested change. If empty, then this is not a suggested insertion.
     */
        suggestedInsertionIds?: string[];
  }
/**
  * A magnitude in a single direction in the specified units.
  */
export interface Schema$Dimension {
      /**
     * The magnitude.
     */
        magnitude?: number;
        /**
     * The units for magnitude.
     */
        unit?: string;
  }
/**
  * A Google Docs document.
  */
export interface Schema$Document {
      /**
     * The main body of the document.
     */
        body?: Schema$Body;
        /**
     * The style of the document.
     */
        documentStyle?: Schema$DocumentStyle;
        /**
     * The footers in the document, keyed by footer ID.
     */
        footers?: any;
        /**
     * The footnotes in the document, keyed by footnote ID.
     */
        footnotes?: any;
        /**
     * The headers in the document, keyed by header ID.
     */
        headers?: any;
        /**
     * The identifier of the document.
     */
        name?: string;
        /**
     * The title of the document.
     */
        title?: string;
  }
/**
  * The style of the document.
  */
export interface Schema$DocumentStyle {
      /**
     * The background of the document.
     */
        background?: Schema$Background;
        /**
     * The ID of the default footer. If not set, there is no default footer.
     */
        defaultFooterId?: string;
        /**
     * The ID of the default header. If not set, there is no default header.
     */
        defaultHeaderId?: string;
        /**
     * The ID of the footer used only for even pages. The value of use_even_page_header_footer determines whether to use the default_footer_id or this value for the footer on even pages. If not set, there is no even page footer.
     */
        evenPageFooterId?: string;
        /**
     * The ID of the header used only for even pages. The value of use_even_page_header_footer determines whether to use the default_header_id or this value for the header on even pages. If not set, there is no even page header.
     */
        evenPageHeaderId?: string;
        /**
     * The ID of the footer used only for the first page. If not set then a unique footer for the first page does not exist. The value of use_first_page_header_footer determines whether to use the default_footer_id or this value for the footer on the first page. If not set, there is no first page footer.
     */
        firstPageFooterId?: string;
        /**
     * The ID of the header used only for the first page. If not set then a unique header for the first page does not exist. The value of use_first_page_header_footer determines whether to use the default_header_id or this value for the header on the first page. If not set, there is no first page header.
     */
        firstPageHeaderId?: string;
        /**
     * The bottom page margin.
     */
        marginBottom?: Schema$Dimension;
        /**
     * The left page margin.
     */
        marginLeft?: Schema$Dimension;
        /**
     * The right page margin.
     */
        marginRight?: Schema$Dimension;
        /**
     * The top page margin.
     */
        marginTop?: Schema$Dimension;
        /**
     * The page number from which to start counting the number of pages.
     */
        pageNumberStart?: number;
        /**
     * The size of a page in the document.
     */
        pageSize?: Schema$Size;
        /**
     * Indicates whether to use the even page header / footer IDs for the even pages.
     */
        useEvenPageHeaderFooter?: boolean;
        /**
     * Indicates whether to use the first page header / footer IDs for the first page.
     */
        useFirstPageHeaderFooter?: boolean;
  }
/**
  * Drawing properties of an EmbeddedObject.
  */
export interface Schema$DrawingProperties {
}
/**
  * An embedded object in a document.
  */
export interface Schema$EmbeddedObject {
      /**
     * The properties of an embedded drawing.
     */
        drawingProperties?: Schema$DrawingProperties;
        /**
     * The properties of an image.
     */
        imageProperties?: Schema$ImageProperties;
        /**
     * The properties of a linked chart embedded from Google Sheets.
     */
        sheetsChartProperties?: Schema$SheetsChartProperties;
  }
/**
  * A ParagraphElement representing an equation.
  */
export interface Schema$Equation {
      /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     */
        suggestedDeletionIds?: string[];
        /**
     * The suggested insertion IDs. A Equation may have multiple insertion IDs if it is a nested suggested change. If empty, then this is not a suggested insertion.
     */
        suggestedInsertionIds?: string[];
  }
/**
  * A document footer.
  */
export interface Schema$Footer {
      /**
     * The contents of the footer.  The indices for a footer&#39;s content begin at zero.
     */
        content?: Schema$StructuralElement[];
        /**
     * The ID of the footer.
     */
        footerId?: string;
  }
/**
  * A document footnote.
  */
export interface Schema$Footnote {
      /**
     * The contents of the footnote.  The indices for a footnote&#39;s content begin at zero.
     */
        content?: Schema$StructuralElement[];
        /**
     * The ID of the footnote.
     */
        footnoteId?: string;
  }
/**
  * A ParagraphElement representing a footnote reference. A footnote reference is the inline content rendered with a number and is used to identify the footnote.
  */
export interface Schema$FootnoteReference {
      /**
     * The ID of the footnote that contains the content of this footnote reference.
     */
        footnoteId?: string;
        /**
     * The rendered number of this footnote.
     */
        footnoteNumber?: string;
        /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     */
        suggestedDeletionIds?: string[];
        /**
     * The suggested insertion IDs. A FootnoteReference may have multiple insertion IDs if it is a nested suggested change. If empty, then this is not a suggested insertion.
     */
        suggestedInsertionIds?: string[];
  }
/**
  * A document header.
  */
export interface Schema$Header {
      /**
     * The contents of the header.  The indices for a header&#39;s content begin at zero.
     */
        content?: Schema$StructuralElement[];
        /**
     * The ID of the header.
     */
        headerId?: string;
  }
/**
  * A ParagraphElement representing a horizontal line.
  */
export interface Schema$HorizontalRule {
      /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     */
        suggestedDeletionIds?: string[];
        /**
     * The suggested insertion IDs. A HorizontalRule may have multiple insertion IDs if it is a nested suggested change. If empty, then this is not a suggested insertion.
     */
        suggestedInsertionIds?: string[];
  }
/**
  * Image properties of an EmbeddedObject.
  */
export interface Schema$ImageProperties {
}
/**
  * A ParagraphElement representing an inline object. An inline object contains an EmbeddedObject such as an image.
  */
export interface Schema$InlineObject {
      /**
     * The properties of this inline object.
     */
        inlineObjectProperties?: Schema$InlineObjectProperties;
        /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     */
        suggestedDeletionIds?: string[];
        /**
     * The suggested insertion IDs. An InlineObject may have multiple insertion IDs if it is a nested suggested change. If empty, then this is not a suggested insertion.
     */
        suggestedInsertionIds?: string[];
  }
/**
  * Properties of an InlineObject.
  */
export interface Schema$InlineObjectProperties {
      /**
     * The embedded object of this inline object.
     */
        embeddedObject?: Schema$EmbeddedObject;
  }
/**
  * A ParagraphElement representing a page break. A page break makes the subsequent text start at the top of the next page.
  */
export interface Schema$PageBreak {
      /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     */
        suggestedDeletionIds?: string[];
        /**
     * The suggested insertion IDs. A PageBreak may have multiple insertion IDs if it is a nested suggested change. If empty, then this is not a suggested insertion.
     */
        suggestedInsertionIds?: string[];
  }
/**
  * A StructuralElement representing a paragraph. A paragraph is a range of content that is terminated with a newline character.
  */
export interface Schema$Paragraph {
      /**
     * The content of the paragraph broken down into its component parts.
     */
        elements?: Schema$ParagraphElement[];
  }
/**
  * A ParagraphElement describes content within a Paragraph.
  */
export interface Schema$ParagraphElement {
      /**
     * An auto text paragraph element.
     */
        autoText?: Schema$AutoText;
        /**
     * A column break paragraph element.
     */
        columnBreak?: Schema$ColumnBreak;
        /**
     * The zero-base end index of this paragraph element, exclusive, in Unicode code units of the UTF-16 encoding.  Unicode code units of the UTF-16 encoding means that surrogate pairs consume two indices. For example, the &quot;GRINNING FACE&quot; emoji would be represented as &quot;\uD83D\uDE00&quot; and would consume two indices.
     */
        endIndex?: string;
        /**
     * An equation paragraph element.
     */
        equation?: Schema$Equation;
        /**
     * A footnote reference paragraph element.
     */
        footnoteReference?: Schema$FootnoteReference;
        /**
     * A horizontal rule paragraph element.
     */
        horizontalRule?: Schema$HorizontalRule;
        /**
     * An inline object paragraph element.
     */
        inlineObject?: Schema$InlineObject;
        /**
     * A page break paragraph element.
     */
        pageBreak?: Schema$PageBreak;
        /**
     * The zero-based start index of this paragraph element, in Unicode code units of the UTF-16 encoding.  Unicode code units of the UTF-16 encoding means that surrogate pairs consume two indices. For example, the &quot;GRINNING FACE&quot; emoji would be represented as &quot;\uD83D\uDE00&quot; and would consume two indices.
     */
        startIndex?: string;
        /**
     * A text run paragraph element.
     */
        textRun?: Schema$TextRun;
  }
/**
  * Replaces all instances of text matching a criteria with replace text.
  */
export interface Schema$ReplaceAllTextRequest {
      /**
     * Finds text in the document matching this substring.
     */
        containsText?: Schema$SubstringMatchCriteria;
        /**
     * The text that will replace the matched text.
     */
        replaceText?: string;
  }
/**
  * The result of replacing text.
  */
export interface Schema$ReplaceAllTextResponse {
      /**
     * The number of occurrences changed by replacing all text.
     */
        occurrencesChanged?: number;
  }
/**
  * A single update to apply to a document.
  */
export interface Schema$Request {
      /**
     * Replaces all instances of the specified text.
     */
        replaceAllText?: Schema$ReplaceAllTextRequest;
  }
/**
  * A single response from an update.
  */
export interface Schema$Response {
      /**
     * The result of replacing text.
     */
        replaceAllText?: Schema$ReplaceAllTextResponse;
  }
/**
  * An RGB color.
  */
export interface Schema$RgbColor {
      /**
     * The blue component of the color, from 0.0 to 1.0.
     */
        blue?: number;
        /**
     * The green component of the color, from 0.0 to 1.0.
     */
        green?: number;
        /**
     * The red component of the color, from 0.0 to 1.0.
     */
        red?: number;
  }
/**
  * A StructuralElement representing a section break. A section is a range of content which has the same section style. A section break represents the start of a new section.  The document body always begins with a section break.
  */
export interface Schema$SectionBreak {
      /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     */
        suggestedDeletionIds?: string[];
        /**
     * The suggested insertion IDs. A SectionBreak may have multiple insertion IDs if it is a nested suggested change. If empty, then this is not a suggested insertion.
     */
        suggestedInsertionIds?: string[];
  }
/**
  * Sheets chart properties of an EmbeddedObject.
  */
export interface Schema$SheetsChartProperties {
}
/**
  * A width and height.
  */
export interface Schema$Size {
      /**
     * The height of the object.
     */
        height?: Schema$Dimension;
        /**
     * The width of the object.
     */
        width?: Schema$Dimension;
  }
/**
  * A StructuralElement describes content that provides structure to the document.
  */
export interface Schema$StructuralElement {
      /**
     * The zero-based end index of this structural element, exclusive, in Unicode code units of the UTF-16 encoding.  Unicode code units of the UTF-16 encoding means that surrogate pairs consume two indices. For example, the &quot;GRINNING FACE&quot; emoji would be represented as &quot;\uD83D\uDE00&quot; and would consume two indices.
     */
        endIndex?: string;
        /**
     * A paragraph type of structural element.
     */
        paragraph?: Schema$Paragraph;
        /**
     * A section break type of structural element.
     */
        sectionBreak?: Schema$SectionBreak;
        /**
     * The zero-based start index of this structural element, in Unicode code units of the UTF-16 encoding.  Unicode code units of the UTF-16 encoding means that surrogate pairs consume two indices. For example, the &quot;GRINNING FACE&quot; emoji would be represented as &quot;\uD83D\uDE00&quot; and would consume two indices.
     */
        startIndex?: string;
        /**
     * A table type of structural element.
     */
        table?: Schema$Table;
        /**
     * A table of contents type of structural element.
     */
        tableOfContents?: Schema$TableOfContents;
  }
/**
  * A criteria that matches a specific string of text in the document.
  */
export interface Schema$SubstringMatchCriteria {
      /**
     * Indicates whether the search should respect case:  - `True`: the search is case sensitive. - `False`: the search is case insensitive.
     */
        matchCase?: boolean;
        /**
     * The text to search for in the document.
     */
        text?: string;
  }
/**
  * A StructuralElement representing a table.
  */
export interface Schema$Table {
      /**
     * Number of columns in the table.  It is possible for a table to be non-rectangular, so some rows may have a different number of cells.
     */
        columns?: number;
        /**
     * Number of rows in the table.
     */
        rows?: number;
        /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     */
        suggestedDeletionIds?: string[];
        /**
     * The suggested insertion IDs. A Table may have multiple insertion IDs if it is a nested suggested change. If empty, then this is not a suggested insertion.
     */
        suggestedInsertionIds?: string[];
        /**
     * The contents and style of each row.
     */
        tableRows?: Schema$TableRow[];
  }
/**
  * The contents and style of a cell in a Table.
  */
export interface Schema$TableCell {
      /**
     * The content of the cell.
     */
        content?: Schema$StructuralElement[];
        /**
     * The zero-based end index of this cell, exclusive, in Unicode code units of the UTF-16 encoding.  Unicode code units of the UTF-16 encoding means that surrogate pairs consume two indices. For example, the &quot;GRINNING FACE&quot; emoji would be represented as &quot;\uD83D\uDE00&quot; and would consume two indices.
     */
        endIndex?: number;
        /**
     * The zero-based start index of this cell, in Unicode code units of the UTF-16 encoding.  Unicode code units of the UTF-16 encoding means that surrogate pairs consume two indices. For example, the &quot;GRINNING FACE&quot; emoji would be represented as &quot;\uD83D\uDE00&quot; and would consume two indices.
     */
        startIndex?: number;
        /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     */
        suggestedDeletionIds?: string[];
        /**
     * The suggested insertion IDs. A TableCell may have multiple insertion IDs if it is a nested suggested change. If empty, then this is not a suggested insertion.
     */
        suggestedInsertionIds?: string[];
        /**
     * The style of the cell.
     */
        tableCellStyle?: Schema$TableCellStyle;
  }
/**
  * The style of a TableCell.
  */
export interface Schema$TableCellStyle {
      /**
     * The column span of the cell.
     */
        columnSpan?: number;
        /**
     * The row span of the cell.
     */
        rowSpan?: number;
  }
/**
  * A StructuralElement representing a table of contents.
  */
export interface Schema$TableOfContents {
      /**
     * The content of the table of contents.
     */
        content?: Schema$StructuralElement[];
        /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     */
        suggestedDeletionIds?: string[];
        /**
     * The suggested insertion IDs. A TableOfContents may have multiple insertion IDs if it is a nested suggested change. If empty, then this is not a suggested insertion.
     */
        suggestedInsertionIds?: string[];
  }
/**
  * The contents and style of a row in a Table.
  */
export interface Schema$TableRow {
      /**
     * The zero-based end index of this row, exclusive, in Unicode code units of the UTF-16 encoding.  Unicode code units of the UTF-16 encoding means that surrogate pairs consume two indices. For example, the &quot;GRINNING FACE&quot; emoji would be represented as &quot;\uD83D\uDE00&quot; and would consume two indices.
     */
        endIndex?: number;
        /**
     * The zero-based start index of this row, in Unicode code units of the UTF-16 encoding.  Unicode code units of the UTF-16 encoding means that surrogate pairs consume two indices. For example, the &quot;GRINNING FACE&quot; emoji would be represented as &quot;\uD83D\uDE00&quot; and would consume two indices.
     */
        startIndex?: number;
        /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     */
        suggestedDeletionIds?: string[];
        /**
     * The suggested insertion IDs. A TableRow may have multiple insertion IDs if it is a nested suggested change. If empty, then this is not a suggested insertion.
     */
        suggestedInsertionIds?: string[];
        /**
     * The contents and style of each cell in this row.  It is possible for a table to be non-rectangular, so some rows may have a different number of cells than other rows in the same table.
     */
        tableCells?: Schema$TableCell[];
  }
/**
  * A ParagraphElement representing a run of text.
  */
export interface Schema$TextRun {
      /**
     * The text of this run.  Any non-text elements in the run are replaced with the Unicode character U+E907.
     */
        content?: string;
        /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     */
        suggestedDeletionIds?: string[];
        /**
     * The suggested insertion IDs. A TextRun may have multiple insertion IDs if it is a nested suggested change. If empty, then this is not a suggested insertion.
     */
        suggestedInsertionIds?: string[];
  }


          export class Resource$Documents {
      root: Docs;
            constructor(root: Docs) {
        this.root = root;
        this.getRoot.bind(this);
              }

      getRoot() {
        return this.root;
      }

                        
/**
 * docs.documents.batchUpdate
 * @desc Applies one or more updates to the document.  Each request is validated before being applied. If any request is not valid, then the entire request will fail and nothing will be applied.  Some requests have replies to give you some information about how they are applied. Other requests do not need to return information; these each return an empty reply. The order of replies matches that of the requests.  For example, suppose you call batchUpdate with four updates, and only the third one returns information. The response would have two empty replies, the reply to the third request, and another empty reply, in that order.  Because other users may be editing the document, the document might not exactly reflect your changes: your changes may be altered with respect to collaborator changes. If there are no collaborators, the document should reflect your changes. In any case, the updates in your request are guaranteed to be applied together atomically.
 * @alias docs.documents.batchUpdate
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string} params.name The identifier of the document to update.
      * @param {().BatchUpdateDocumentRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
batchUpdate(params?: Params$Resource$Documents$Batchupdate, options?: MethodOptions): AxiosPromise<Schema$BatchUpdateDocumentResponse>;
batchUpdate(params: Params$Resource$Documents$Batchupdate, options: MethodOptions|BodyResponseCallback<Schema$BatchUpdateDocumentResponse>, callback: BodyResponseCallback<Schema$BatchUpdateDocumentResponse>): void;
batchUpdate(params: Params$Resource$Documents$Batchupdate, callback: BodyResponseCallback<Schema$BatchUpdateDocumentResponse>): void;
batchUpdate(callback: BodyResponseCallback<Schema$BatchUpdateDocumentResponse>): void;
batchUpdate(paramsOrCallback?: Params$Resource$Documents$Batchupdate|BodyResponseCallback<Schema$BatchUpdateDocumentResponse>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$BatchUpdateDocumentResponse>, callback?: BodyResponseCallback<Schema$BatchUpdateDocumentResponse>): void|AxiosPromise<Schema$BatchUpdateDocumentResponse> {
  let params = (paramsOrCallback || {}) as Params$Resource$Documents$Batchupdate;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Documents$Batchupdate;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://docs.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/v1/{+name}:batchUpdate').replace(/([^:]\/)\/+/g, '$1'),
      method: 'POST'
    }, options),
    params,
        requiredParams: ['name'],
    pathParams: ['name'],
    context: this.getRoot()
  };
    if (callback) {
    createAPIRequest<Schema$BatchUpdateDocumentResponse>(parameters, callback);
  } else {
    return createAPIRequest<Schema$BatchUpdateDocumentResponse>(parameters);
  }
}

                  
/**
 * docs.documents.get
 * @desc Gets the latest version of the specified document.
 * @alias docs.documents.get
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string} params.name The identifier of the document to retrieve.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
get(params?: Params$Resource$Documents$Get, options?: MethodOptions): AxiosPromise<Schema$Document>;
get(params: Params$Resource$Documents$Get, options: MethodOptions|BodyResponseCallback<Schema$Document>, callback: BodyResponseCallback<Schema$Document>): void;
get(params: Params$Resource$Documents$Get, callback: BodyResponseCallback<Schema$Document>): void;
get(callback: BodyResponseCallback<Schema$Document>): void;
get(paramsOrCallback?: Params$Resource$Documents$Get|BodyResponseCallback<Schema$Document>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Document>, callback?: BodyResponseCallback<Schema$Document>): void|AxiosPromise<Schema$Document> {
  let params = (paramsOrCallback || {}) as Params$Resource$Documents$Get;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Documents$Get;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://docs.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
      method: 'GET'
    }, options),
    params,
        requiredParams: ['name'],
    pathParams: ['name'],
    context: this.getRoot()
  };
    if (callback) {
    createAPIRequest<Schema$Document>(parameters, callback);
  } else {
    return createAPIRequest<Schema$Document>(parameters);
  }
}

                  }

                  export interface Params$Resource$Documents$Batchupdate {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The identifier of the document to update.
               */
              name?: string;
                      
                       /**
              * Request body metadata
              */
            requestBody?: Schema$BatchUpdateDocumentRequest;
          
                  }
              export interface Params$Resource$Documents$Get {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The identifier of the document to retrieve.
               */
              name?: string;
                      
           
                  }
          
    
  

}
