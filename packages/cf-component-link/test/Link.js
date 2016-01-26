import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import Link from '../src/Link';

describe('Link', function() {
  it('should render', function() {
    assertEqualJSX(
      <Link to="/route">Hello World</Link>,
      // should equal
      <a href="/route" className="cf-link">Hello World</a>
    );
  });

  it('should render with onClick', function() {
    assertEqualJSX(
      <Link onClick={() => {}}>Hello World</Link>,
      // should equal
      <a href="#!" role="button" className="cf-link">Hello World</a>
    );
  });

  it('should render with tagName', function() {
    assertEqualJSX(
      <Link to="/route" tagName="button">Hello World</Link>,
      // should equal
      <button role="link" className="cf-link">Hello World</button>
    );
  });

  it('should render with className', function() {
    assertEqualJSX(
      <Link to="/route" className="special-link">Hello World</Link>,
      // should equal
      <a href="/route" className="cf-link special-link">Hello World</a>
    );
  });

  it('should render with role', function() {
    assertEqualJSX(
      <Link to="/route" role="button" tagName="div">Hello World</Link>,
      // should equal
      <div role="button" className="cf-link">Hello World</div>
    );
  });

  it('should render with disabled', function() {
    assertEqualJSX(
      <Link to="/route" disabled>Hello World</Link>,
      // should equal
      <a href="/route" className="cf-link cf-link--disabled" disabled>Hello World</a>
    );
  });
});