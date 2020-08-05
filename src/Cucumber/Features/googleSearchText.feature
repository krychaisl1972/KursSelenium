Feature: Google search

  Scenario: user can search any keyword

    Given an open browser with google.com
    When a keyword selenium is entered in input field
    Then the first one should contain selenium
    And close browser

  Scenario Outline: user can search any keyword

    Given an open browser with google.com
    When a keyword <searchString> is entered in input field
    Then the first one should contain <searchString>
    And close browser

    Examples:
    |selenium|
    |cucumbers|


