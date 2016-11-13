import GlyphString from './GlyphString';

export default class LineFragment extends GlyphString {
  constructor(rect, glyphString) {
    super(glyphString.string, glyphString.glyphRuns, glyphString.start, glyphString.end);
    this.rect = rect;
  }
}
