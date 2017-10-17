<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * DefaultController.
 *
 * @author Gabriele Martini <gabriele@elearnsecurity.com>
 */
class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('AppBundle::index.html.twig');
    }
}
