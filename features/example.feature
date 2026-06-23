Feature: Example UI Test
  @smoke
  Scenario: Validate example page loads
    Given I navigate to the example page
    Then I should see the page title
