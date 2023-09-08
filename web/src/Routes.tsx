// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'
import NavLayout from './layouts/NavLayout/NavLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={ScaffoldLayout} title="Assets" titleTo="assets" buttonLabel="New Asset" buttonTo="newAsset">
        <Route path="/assets/new" page={AssetNewAssetPage} name="newAsset" />
        <Route path="/assets/{id:Int}/edit" page={AssetEditAssetPage} name="editAsset" />
        <Route path="/assets/{id:Int}" page={AssetAssetPage} name="asset" />
        <Route path="/assets" page={AssetAssetsPage} name="assets" />
      </Set>
      <Set wrap={NavLayout}>
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
